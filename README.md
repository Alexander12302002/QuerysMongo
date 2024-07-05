1. **Buscar películas del género "Accion":**

   ``` javascript
db.movies.find({genre: {$eq: "Accion"}},{name: 1, genre: 1})
   ```

2. **Buscar películas con más de 200 copias en formato "Bluray":**

   ``` javascript
db.movies.find({"format.name": "Bluray", "format.copies": {$gt: 200}} ,{_id:0, name: 1, format: 1})
   ```

3. **Buscar películas donde el valor del formato "dvd" sea menor que 10:**

   ``` javascript
   db.movies.find({"format.name": "dvd", "format.value": {$lt: 10}} ,{_id:0, name: 1, format: 1})
   ```

4. **Buscar películas con un personaje apodado "Cobb":**

   ``` javascript
  db.movies.find({"character.apodo": "Cobb"} ,{_id:0, name: 1, character: 1})  
   ```

5. **Buscar películas con actores de id 2 y 3:**

   ``` javascript
   db.movies.find(
   {character: {$elemMatch:{ id_actor: {$in:[2,3]}}}},
   {name: 1, character: 1});
   
   db.movies.find(
   {"character.id_actor": {$in:[2,3]}},
   {name: 1, character: 1});
   ```

6. **Buscar películas que tengan el formato "Bluray":**

   ``` javascript
  db.movies.find({"format.name": {$eq: "Bluray"}} ,{name: 1, format:1});
   ```

7. **Buscar películas con el género "Ciencia Ficción":**

   ``` javascript
   db.movies.find({genre: {$elemMatch: {$eq: "Ciencia Ficción"}}},{_id: 0, name:1, genre:1});
   ```

8. **Buscar películas con un rol principal llamado "Miguel":**

   ``` javascript
   db.movies.find({"character.rol": "principal" ,"character.apodo": "Miguel"} ,{_id:0, name: 1, character: 1})
   ```

9. **Buscar películas que tengan al menos un formato con más de 100 copias:**

   ``` javascript
   db.movies.find({"format.copies": {$gt: 100}} ,{_id:0, name: 1, format: 1})
   ```

10. **Buscar películas con un actor con id_actor 1:**

   ```javascript
   db.movies.find({"character.id_actor": {$in:[1]}},{name: 1, character: 1});
   ```

11. **Buscar películas con un personaje principal apodado "Cobb":**

   ``` javascript
   db.movies.find({"character.rol": "principal" ,"character.apodo": "Cobb"} ,{_id:0, name: 1, character: 1})
   ```
12. **Buscar películas con más de 200 copias en formato "Bluray":**

   ``` javascript
  db.movies.find({"format.name": "Bluray", "format.copies": {$gt: 200}} ,{_id:0, name: 1, format: 1})
   ```

13. **Buscar películas donde el valor del formato "dvd" sea menor que 10:**

   ``` javascript
   db.movies.find({"format.name": "dvd", "format.value": {$lt: 10}} ,{_id:0, name: 1, format: 1})
   ```

14. **Buscar películas con un personaje secundario apodado "Arthur":**

   ``` javascript
   db.movies.find({"character.rol": "secundario" ,"character.apodo": "Arthur"} ,{_id:0, name: 1, character: 1})
   ```

15. **Buscar películas con un rol principal y un apodo "Miguel":**

   ``` javascript
   db.movies.find({"character.rol": "principal" ,"character.apodo": "Miguel"} ,{_id:0, name: 1, character: 1})
   ```
