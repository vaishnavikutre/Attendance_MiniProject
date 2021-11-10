from django.db import models
from users.models import Users


# Create your models here.


# class Users(models.Model):
#     userId = models.AutoField(primary_key=True)
#     email = models.CharField(max_length=50)
#     password = models.CharField(max_length=100)
#     role = models.CharField(max_length=30)


class Sem(models.Model):
    semId = models.AutoField(primary_key=True)
    sem = models.CharField(max_length=50)


class Class(models.Model):
    classId = models.AutoField(primary_key=True)
    className = models.CharField(max_length=50)


class Subject(models.Model):
    subjectId = models.AutoField(primary_key=True)
    subjectName = models.CharField(max_length=50)


class Branch(models.Model):
    branchId = models.AutoField(primary_key=True)
    branchName = models.CharField(max_length=50)


class Student(models.Model):
    studentId = models.AutoField(primary_key=True)
    usn = models.CharField(max_length=30, unique=True)
    name = models.CharField(max_length=50)
    sem = models.ForeignKey(Sem, on_delete=models.CASCADE)
    branch = models.ForeignKey(Branch, on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)


class Faculty(models.Model):
    facultyId = models.AutoField(primary_key=True)
    userId = models.ForeignKey(Users, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    Class = models.ForeignKey(Class, on_delete=models.CASCADE)
    branch = models.ForeignKey(Branch, on_delete=models.CASCADE)


class Attendance(models.Model):
    attendanceId = models.CharField(max_length=50)
    studentId = models.ForeignKey(Student, on_delete=models.CASCADE)
    teacherId = models.ForeignKey(Faculty, on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    status = models.BooleanField()
    date = models.DateTimeField()
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    Class = models.ForeignKey(Class, on_delete=models.CASCADE)
    branch = models.ForeignKey(Branch, on_delete=models.CASCADE)
