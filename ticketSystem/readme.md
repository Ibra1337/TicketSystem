**Activate the virtual environment**

Open **PowerShell** (or CMD) in the project directory and run:

```
.\venv\Scripts\Activate
```

**install depenedencies**

    
    pip install -r requirements.txt
    

**Apply migrations**

    
    python manage.py migrate
    
**(Optional) Create a superuser**

   
    python manage.py createsuperuser
    

**Run the development server**

    
    python manage.py runserver
   
now te backend server should be running on port 8000