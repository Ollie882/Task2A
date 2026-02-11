CREATE TABLE Students(
    StudentID INTEGER NOT NULL,
    StudentForeName TEXT NOT NULL,
    StudentSurname TEXT NOT NULL,
    Subject TEXT,
    StudentResult INTEGER NOT NULL,
    ExamBoard TEXT,
    College TEXT,
    PRIMARY KEY (StudentID)
);



INSERT INTO Students (StudentID, StudentForeName, StudentSurname, Subject, StudentResult, ExamBoard, College)
VALUES
(101, 'Immy', 'Faulkner', 'English', 88, 'EdExcel', 'Shrewsbury College'),
(102, 'Lewis', 'Drake', 'Chemistry', 78, 'AQA', 'Shrewsbury College'),
(103, 'Eva', 'Knight', 'Physics', 92, 'OCR', 'Shrewsbury College'),
(104, 'Dexter', 'Crippin', 'Mathematics', 88, 'EdExcel', 'Shrewsbury College'),
(105, 'Daniel', 'Taylor', 'English', 74, 'AQA', 'Shrewsbury College'),
(106, 'Olivia', 'Evans', 'History', 81, 'OCR', 'Shrewsbury College'),
(107, 'William', 'Thomas', 'Computer Science', 95, 'EdExcel', 'Shrewsbury College'),
(108, 'Isabella', 'Roberts', 'Geography', 69, 'AQA', 'Shrewsbury College'),
(109, 'Ethan', 'Walker', 'Economics', 87, 'OCR', 'Shrewsbury College'),
(110, 'Mia', 'Hall', 'Psychology', 90, 'EdExcel', 'Shrewsbury College')


select* from Students 


SELECT StudentForeName, StudentSurname, StudentID, Subject, ExamBoard, StudentResult
FROM Students
ORDER BY StudentSurname ASC;


SELECT Students.StudentName, Courses.CourseName
FROM Students, Enrolments, Courses
WHERE Students.StudentID = Enrolments.StudentID
AND Courses.CourseID = Enrolments.CourseID;



