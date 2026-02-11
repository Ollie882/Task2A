
# Database Normalisation Project: 0NF to 3NF with Supabase

## Overview

In this project, you will:
- Learn about database normalisation (0NF to 3NF)
- Transform a messy dataset into a fully normalised relational database
- Create your tables and insert data using Supabase (PostgreSQL)
- Generate and submit your own ERD (Entity Relationship Diagram)
- Submit your completed database project

---

## 1. Introduction to Normalisation

**Normalisation** is the process of organising data to reduce redundancy and improve integrity. You will learn to:
- Identify problems in unnormalised data (0NF)
- Apply the rules of 1NF, 2NF, and 3NF
- Design a clean, efficient relational database

---

## 2. Key Concepts

- **Primary Key (PK):** Uniquely identifies each row in a table.
- **Foreign Key (FK):** Links one table to another.
- **Functional Dependency:** When one attribute determines another.
- **Repeating Groups:** Multiple columns for similar data (e.g., ingredient1, ingredient2).
- **Atomic Value:** A single, indivisible piece of data.

---

## 3. The Normalisation Process

### Step 1: Start with the 0NF Table

Review the provided unnormalised data. Identify repeating groups and redundancy.

### Step 2: Convert to 1NF

- Remove repeating groups (e.g., ingredient1, ingredient2, etc.)
- Ensure each field contains only atomic values
- Each row should be uniquely identifiable

### Step 3: Convert to 2NF

- Remove partial dependencies (attributes must depend on the whole primary key)
- Separate data into new tables as needed

### Step 4: Convert to 3NF

- Remove transitive dependencies (non-key attributes must depend only on the primary key)
- Finalise your table structure

---

## 4. Table Structure (3NF)

You will create the following tables:

1. **Tbl_User**
    - User_ID (PK)
    - user_name
    - user_email

2. **Tbl_Loyalty**
    - Loyalty_ID (PK)
    - User_ID (FK)
    - loyalty_points

3. **Tbl_Recipe**
    - Recipe_ID (PK)
    - recipe_name
    - recipe_difficulty
    - recipe_time
    - calories
    - dietary_requirements
    - contains_nuts

4. **Tbl_Ingredients**
    - Ingredient_ID (PK)
    - ingredient_name

5. **Tbl_Recipe_ingredients**
    - Recipe_ingredients_ID (PK)
    - Recipe_ID (FK)
    - Ingredients_ID (FK)
    - quantity_value
    - quantity_unit

6. **Tbl_User_Recipes**
    - User_Recipe_ID (PK)
    - User_ID (FK)
    - Recipe_ID (FK)
    - Date

---

## 5. Creating Tables in Supabase

### **Order of Table Creation**

1. Tbl_User  
2. Tbl_Recipe  
3. Tbl_Ingredients  
4. Tbl_Loyalty  
5. Tbl_Recipe_ingredients  
6. Tbl_User_Recipes  

**Why this order?**  
Tables with no dependencies are created first. Tables with foreign keys are created after their referenced tables.

### **How to Create Tables**

1. Log in to [Supabase](https://supabase.com) and open your project.
2. Go to the **Table Editor**.
3. Click **New Table** and enter the table name and columns as shown above.
4. Set primary keys and foreign keys as needed.
5. Use validation rules:
    - Mark required fields as **NOT NULL**
    - Set unique constraints (e.g., user_email)
    - Use check constraints for positive numbers (e.g., loyalty_points >= 0)
    - For `recipe_difficulty`, use a dropdown or check constraint for 'Easy', 'Medium', 'Hard'
6. Save each table before moving to the next.

---

## 6. Inserting Data

### **Order of Data Insertion**

1. Tbl_User  
2. Tbl_Recipe  
3. Tbl_Ingredients  
4. Tbl_Loyalty  
5. Tbl_Recipe_ingredients  
6. Tbl_User_Recipes  

**Why this order?**  
You must insert data into parent tables before child tables that reference them.

### **How to Insert Data**

- Use the **Table Editor** to add rows to each table.
- Or, use the **SQL Editor** to write `INSERT` statements.
- Make sure to use the correct IDs for foreign keys (you can look them up in the Table Editor after inserting parent records).

---

## 7. Checking Your Work

- Use the Table Editor or run `SELECT * FROM TableName;` in the SQL Editor to view your data.
- Check that all foreign key relationships are correct.
- Make sure validation rules are enforced (e.g., no negative points, unique emails).

---

## 8. Generating and Submitting Your ERD

- Supabase automatically generates an ERD for your database.
- To view it:  
  1. Go to your project dashboard.
  2. Click **Database** > **ERD**.
  3. Download or screenshot your ERD.
- **Add your ERD diagram to the end of your submission.**

---

## 9. Submission Checklist

- [ ] All tables created in the correct order
- [ ] Data inserted in the correct order
- [ ] Validation rules enforced
- [ ] ERD diagram included
- [ ] README.md file completed

---

## 10. What to Submit

- Your completed database in Supabase (with all tables and data)
- Your ERD diagram (as an image or PDF)
- This completed README.md file

---

## 11. Beginner Tips

- **Primary Key:** Uniquely identifies each row (e.g., User_ID).
- **Foreign Key:** Links to another table (e.g., User_ID in Tbl_Loyalty).
- **Validation:** Keeps your data clean and correct.
- **Supabase Table Editor:** The easiest way to add and view data if you’re new to SQL.
- If you make a mistake, you can delete rows or drop tables and start again.

---

## 12. Need Help?

- Ask your tutor or teaching assistant.
- Visit the [Supabase documentation](https://supabase.com/docs).
- Use the Table Editor for a visual approach, or the SQL Editor for more control.

---

