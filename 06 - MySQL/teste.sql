CREATE TABLE usuarios(
    nome Varchar(50),
    email varchar(100),
    idade int
);

INSERT INTO usuarios(nome, email, idade) VALUE(
    "Bruno Souza", 
    "bruno-souza@hotmail.com",
    28
);

SELECT * from usuarios WHERE idade = 25;
SELECT * from usuarios WHERE nome = "Bruno Souza";
SELECT * from usuarios WHERE idade >= 27;


DELETE FROM usuarios WHERE nome = "Douglas";

UPDATE usuarios SET nome = "Nome de Teste" WHERE nome = "Luis";