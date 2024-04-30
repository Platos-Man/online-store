from rest_framework import generics
from .serializers import ProductSerializer
from .models import Product

# Create your views here.

class ProductListView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer