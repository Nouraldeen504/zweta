# serializers.py

from rest_framework import serializers
from .models import Category, Product

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    category_name = serializers.ReadOnlyField(source='category.name')

    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price', 'category', 'image', 'category_name'] 
        extra_kwargs = {
            'image': {'required': False}  # Make image optional
        }
