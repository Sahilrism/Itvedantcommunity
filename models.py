from django.db import models

# Create your models here.

class Departments(models.Model):
    DepartmentId = models.AutoField(primary_key=True)
    DepartmentName = models.CharField(max_length=500)
    Location = models.CharField(max_length=100)
    StudentName= models.CharField(max_length=100)
    Date= models.DateField()

class Employees(models.Model):
    EmployeeId = models.AutoField(primary_key=True)
    EmployeeName = models.CharField(max_length=100)
    Department = models.CharField(max_length=100)
    DateOfJoining = models.CharField(max_length=100)
    PhotoFileName = models.CharField(max_length=100)

class Signup(models.Model):
    SignupId= models.AutoField(primary_key=True)
    Name = models.CharField(max_length=100)
    Email = models.CharField(max_length=100)
    Password = models.CharField(max_length=100)
    Contact = models.CharField(max_length=10)
