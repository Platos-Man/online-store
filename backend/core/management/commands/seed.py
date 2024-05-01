from django.core.management.base import BaseCommand
from products.models import Product
from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group
from django.utils import lorem_ipsum

User = get_user_model()

class Command(BaseCommand):
    help = "command for creating mock data for database"

    def handle(self, *args, **kwargs):
        self.clear_database()
        self.populate_database()
        

    def clear_database(self):
        User.objects.all().delete()
        Group.objects.all().delete()
        Product.objects.all().delete()

    def create_users(self):
        User._default_manager.create_superuser(username="super", password="super")

    def create_products(self):
        for _ in range(20):
            Product.objects.create(name=lorem_ipsum.words(1, common=False).title(), description=lorem_ipsum.paragraph())

    def populate_database(self):
        self.create_users()
        self.create_products()