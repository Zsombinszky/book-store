- **Klónozd** a repót:

  ```bash
  git clone https://github.com/Zsombinszky/mongoDB-items.git
  ```

- **Saját repo létrehozása a sablonból:**
  Lépj a repo oldalára:
  👉 [https://github.com/Zsombinszky/book-store](https://github.com/Zsombinszky/book-store)
  Kattints a **Use this template** gombra, és hozz létre egy saját példányt a GitHub-fiókod alatt. Ezután klónozd le a saját repódat.

---

## 2. MongoDB fiók létrehozása és cluster beállítása

1. Regisztrálj a [https://www.mongodb.com](https://www.mongodb.com) oldalon, vagy jelentkezz be.

2. Hozz létre egy **új Projectet**.

3. A projekten belül hozz létre egy **új Clustert**:

   - **Cluster neve:** `Cluster0` (alapértelmezett)
   - **Ingyenes csomag** (a jobb oldali opció)
   - **Szerver régió:** Frankfurt (vagy másik európai régió)

4. A cluster létrehozása után:

   - Navigálj a **Database Access** menüpontba, és hozd létre a saját felhasználónevedet és jelszavadat.
   - Ezután menj a **Database / Connect** részhez.
   - Válaszd a **Driver** opciót.
   - Másold ki az ott látható MongoDB connection stringet (valami ilyesmi lesz):

     ```
     mongodb+srv://<username>:<password>@cluster0.xjcfdnp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
     ```

---

## 3. `.env` fájl létrehozása

A projekt gyökérkönyvtárában hozz létre egy `.env` fájlt a következő tartalommal:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xjcfdnp.mongodb.net/books?retryWrites=true&w=majority&appName=Cluster0
```

- **Fontos:** A `<username>` és `<password>` helyére írd be a saját MongoDB felhasználónevedet és jelszavadat.
- A végén lévő `/books` biztosítja, hogy az `books` nevű adatbázissal dolgozzon a szerver.

---

## 4. Függőségek telepítése

A terminálban, a backend és frontend mappában is:

```bash
npm install
```

---

## 5. Projekt futtatása

Ha minden rendben, a következő paranccsal elindíthatod a backendet és a frontendet is de ehez 2 külön terminal kell majd:

```bash
npm run dev
```

---
