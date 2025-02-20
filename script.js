/* تنسيق عام */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

/* شريط القوائم */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    padding: 15px;
    color: white;
}

.navbar ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
}

.navbar ul li {
    margin: 0 10px;
}

.navbar ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

/* الشريط الأزرق الفاصل */
.separator {
    width: 100%;
    height: 5px;
    background-color: #0073e6;
}

/* الصورة الرئيسية */
.hero {
    position: relative;
    height: 400px;
    overflow: hidden;
}

.hero-image {
    background: url('hero.jpg') no-repeat center center/cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.5s ease-in-out;
}

.hero-text {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 15px;
    border-radius: 5px;
    text-align: center;
}

/* ربط ملف JavaScript */
<script src="script.js"></script>
