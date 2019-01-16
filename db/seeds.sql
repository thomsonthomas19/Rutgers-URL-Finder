USE rutgersbookmark;

INSERT INTO bookmarks 
	(title, link, description, createdAt, updatedAt)
VALUES
  ("test title", "https://www.google.com", "test description", "2019-01-15 12:00", "2019-01-15 12:00");

INSERT INTO categories
	(Category, createdAt, updatedAt)
VALUES
  ("Test Category", "2019-01-15 12:00", "2019-01-15 12:00");
