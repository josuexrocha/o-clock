CREATE TABLE viewing (
	id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	show_name text NOT NULL,
	season smallint NOT NULL,
	episode smallint NOT NULL,
	viewing_date date NOT NULL,
	viewer_country text NOT NULL,
	viewer_age_group int NOT NULL,
	binge_session bool NOT NULL
);

-- holy cow ! ne cherchez pas à comprendre ce qui suit, exécutez le script les yeux fermés
-- j'insiste, ferme ce fichier tout de suite !
-- allez allez, tu crois ptêt que je vois que t'es encore dessus ?


CREATE OR REPLACE FUNCTION random(mini integer, maxi integer) RETURNS integer AS $$
SELECT (floor(random() * (maxi - mini + 1)) + mini)::int;
$$ LANGUAGE 'sql' STRICT;


INSERT INTO viewing (show_name, season, episode, viewing_date, viewer_country, viewer_age_group, binge_session)
SELECT
	s show_name,
	random(1, t.n) season,
	random(1, 20) episode,
	('2019-01-01'::date - (random(0, 450) || ' days')::interval)::date viewing_date,
	p.l viewer_country,
    random(2, 7) * 10 viewer_age_group,
    random(0, 1) = 0 binge_session
FROM (
	VALUES (1, 'Sherclock', 4),
	(2, 'Game of Crowns', 8),
	(3, 'Dexterate Housewives', 11),
	(4, 'Les Experts Saint-Tropez', 22),
	(5, 'Dr Mouse', 5),
	(6, 'prompt() à Malibu', 13)
) t(i, s, n)
JOIN (
	SELECT d, random(1, 6) r
	FROM generate_series(1, 61422, 1) v(d)
) t2 ON t.i = t2.r
JOIN (
	VALUES (1, 'France'),
	(2, 'France'),
	(3, 'France'),
	(4, 'Angleterre'),
	(5, 'Angleterre'),
	(6, 'Allemagne'),
	(7, 'Allemagne'),
	(8, 'Allemagne'),
	(9, 'Allemagne'),
	(10, 'Allemagne'),
	(11, 'Italie'),
	(12, 'Italie'),
	(13, 'Italie'),
	(14, 'Grèce'),
	(15, 'Finlande'),
	(16, 'Finlande'),
	(17, 'Espagne')
) p (i, l) ON true
JOIN (
    SELECT d, random(1, 17) r
    FROM generate_series(1, 61422, 1) v(d)
) t3 ON p.i = t3.r AND t2.d = t3.d;