# Express SV Test Template

שרת Express בסיסי שמחזיר 3 רשומות. בעתיד נחבר אותו ל-MongoDB Atlas.

## התקנה

```bash
cd Express_SV_Test_Template
npm install
```

## הרצה

```bash
npm run dev
```

השרת ירוץ על http://localhost:3000

## נקודות קצה (Endpoints)

- `GET /` - בדיקת חיים
- `GET /api/items` - מחזיר 3 רשומות (כרגע hardcoded)

## הרצה מלאה (Express + React)

בטרמינל אחד (Express):
```powershell
cd c:\SVCollage\sv_Exam\FullProjSetUp\Express_SV_Test_Template
npm install
npm run dev
```

בטרמינל שני (React):
```powershell
cd c:\SVCollage\sv_Exam\FullProjSetUp\React_SV_Test_Template
npm install
npm run dev
```

פתח את http://localhost:5173 ותראה את 3 הפריטים שנטענים מהשרת.

> **הערה ל-PowerShell:** הסימן `&&` (להרצת פקודות ברצף) **לא נתמך ב-PowerShell 5.1** — צריך להריץ כל פקודה בשורה נפרדת, או להשתמש ב-`;` (מריץ גם אם הקודם נכשל).

## פתרון תקלות

**שגיאה: `EADDRINUSE: address already in use :::3000`**
פורט 3000 תפוס על ידי שרת ישן שעוד רץ. למצוא ולסגור:

```powershell
netstat -ano | Select-String ":3000.*LISTENING"
# התוצאה תיראה: TCP 0.0.0.0:3000 ... LISTENING <PID>
Stop-Process -Id <PID> -Force
```

## השלב הבא - חיבור ל-MongoDB Atlas

מה שצריך ממך:

1. **חשבון MongoDB Atlas** (חינמי): https://www.mongodb.com/cloud/atlas/register
2. **יצירת Cluster** (Free Tier - M0)
3. **יצירת משתמש DB** (Database Access -> Add New Database User) - שמור את ה-username והסיסמה
4. **הרשאת IP** (Network Access -> Add IP Address) - לבחירה: `0.0.0.0/0` לפיתוח
5. **Connection String**: לחץ על Connect -> Drivers -> העתק את ה-URI שנראה ככה:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
6. תעביר לי את ה-URI (אפשר עם placeholder לסיסמה) ואני אסיים את החיבור.
