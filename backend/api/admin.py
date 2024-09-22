# admin.py

from django.contrib import admin
from .models import Category, Product

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')  # Display these fields in the list view

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'category', 'price', 'image')  # Display these fields in the list view
    list_filter = ('category',)  # Add filter sidebar for categories
    search_fields = ('name',)  # Enable search by product name

