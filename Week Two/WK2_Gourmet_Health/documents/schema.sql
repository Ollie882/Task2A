-- ===== USERS TABLE =====
CREATE TABLE Tbl_User (
    User_ID SERIAL PRIMARY KEY,
    User_Name VARCHAR(50) NOT NULL,
    Surname VARCHAR(50) NOT NULL,
    user_email VARCHAR(100) UNIQUE NOT NULL,
    Loyalty_Points INT NOT NULL DEFAULT 0 CHECK (Loyalty_Points >= 0),
    Address VARCHAR(150)
);

-- ===== RECIPES TABLE =====
CREATE TABLE Tbl_Recipe (
    Recipe_ID SERIAL PRIMARY KEY,
    Recipe_Name VARCHAR(50) NOT NULL,
    Recipe_Difficulty VARCHAR(20) NOT NULL CHECK (Recipe_Difficulty IN ('Easy', 'Medium', 'Hard')),
    Price DECIMAL(10,2) NOT NULL CHECK (Price >= 0)
);

-- ===== RECIPE INGREDIENTS TABLE =====
CREATE TABLE Tbl_Recipe_Ingr_ID (
    Recipe_Ingr_ID SERIAL PRIMARY KEY,
    Recipe_ID INT NOT NULL REFERENCES Tbl_Recipe(Recipe_ID) ON DELETE CASCADE,
    Ingredient VARCHAR(50) NOT NULL,
    Quantity VARCHAR(50) NOT NULL
);

-- ===== ORDERS TABLE =====
CREATE TABLE Tbl_Order (
    Order_ID SERIAL PRIMARY KEY,
    User_ID INT NOT NULL REFERENCES Tbl_User(User_ID) ON DELETE CASCADE,
    Recipe_ID INT NOT NULL REFERENCES Tbl_Recipe(Recipe_ID) ON DELETE CASCADE
);

-- ===== SAMPLE DATA =====
INSERT INTO Tbl_User (User_Name, Surname, user_email, Loyalty_Points, Address) VALUES
('Sarah', 'Cox', 'sarah@example.com', 120, '12 Street'),
('Mo', 'Sampson', 'mo@example.com', 80, '14 Street'),
('Priya', 'Davis', 'priya@example.com', 95, '10 Street'),
('Aisha', 'Brown', 'aisha@example.com', 70, '11 Street'),
('Daniel', 'Jones', 'daniel@example.com', 60, '14 Street');

INSERT INTO Tbl_Recipe (Recipe_Name, Recipe_Difficulty, Price) VALUES
('Lentil Curry', 'Medium', 11.93),
('Berry Smoothie', 'Easy', 3.33),
('Pasta Bake', 'Easy', 6.33),
('Veg Stir-Fry', 'Medium', 8.50);

INSERT INTO Tbl_Recipe_Ingr_ID (Recipe_ID, Ingredient, Quantity) VALUES
(1, 'Lentils', '200g'),
(1, 'Coconut milk', '150ml'),
(1, 'Spinach', '100g'),
(2, 'Berries', '100g'),
(2, 'Yoghurt', '200g'),
(2, 'Honey', '50g'),
(3, 'Pasta', '150g'),
(3, 'Cheese', '100g'),
(3, 'Tomato', '100g'),
(3, 'Broccoli', '150g'),
(4, 'Soy sauce', '50ml'),
(4, 'Carrot', '150g'),
(4, 'Broccoli', '150g');

INSERT INTO Tbl_Order (User_ID, Recipe_ID) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 1);
