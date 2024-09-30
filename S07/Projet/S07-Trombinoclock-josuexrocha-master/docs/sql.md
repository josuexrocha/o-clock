-- Sélectionne toutes les promotions et les trie par ordre alphabétique du nom.
-- SELECT * FROM promotions ORDER BY name ASC;

-- Sélectionne tous les étudiants et les trie par ordre alphabétique du nom de famille.
-- SELECT * FROM students ORDER BY last_name ASC;

-- Sélectionne tous les étudiants et les trie par ordre alphabétique du nom de famille, puis par prénom en cas d'égalité.
-- SELECT * FROM students ORDER BY last_name ASC, first_name ASC;

-- Sélectionne tous les étudiants appartenant à la promotion avec l'identifiant 135.
-- SELECT * FROM students WHERE promo = 135;

-- Sélectionne tous les étudiants dont le prénom ou le nom de famille contient 'max' (insensible à la casse).
-- SELECT * FROM students WHERE first_name ILIKE '%max%' OR last_name ILIKE '%max%';

