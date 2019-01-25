USE rutgersbookmark;

INSERT INTO categories
	(Category, createdAt, updatedAt)
VALUES
  ("Test Category", "2019-01-15 12:00", "2019-01-15 12:00");
  
INSERT INTO bookmarks 
	(title, link, description, createdAt, updatedAt, CategoryId)
VALUES
  ("Intro to Git", "https://www.google.com", "test description", "2019-01-15 12:00", "2019-01-15 12:00", "2");

  INSERT INTO bookmarks 
	(title, link, description, createdAt, updatedAt, CategoryId)
VALUES
  ("Intro to HTML", "https://www.google.com", "test description", "2019-01-15 12:00", "2019-01-15 12:00", "2");

  INSERT INTO bookmarks 
	(title, link, description, createdAt, updatedAt, CategoryId)
VALUES
  ("Intro to CSS", "https://www.google.com", "test description", "2019-01-15 12:00", "2019-01-15 12:00", "2");

  INSERT INTO bookmarks 
	(title, link, description, createdAt, updatedAt, CategoryId)
VALUES
  ("Intro to JS", "https://www.google.com", "test description", "2019-01-15 12:00", "2019-01-15 12:00", "2");

