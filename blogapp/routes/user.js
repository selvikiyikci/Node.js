const express = require("express");
const router  = express.Router();
const data = {
    title: "Popüler Kurslar",
    categories: ["Web Geliştirme", "Programlama", "Mobil Uygulamalar", "Veri Analizi", "Ofis Uygulamaları"],
    blogs: [
        {
            blogid: 1,
            baslik: "Komple Uygulamalı Web Geliştirme",
            aciklama: "Sıfırdan ileri seviyeye 'Web Geliştirme': Html, Css, Sass, Flexbox, Bootstrap, Javascript, Angular, JQuery, Asp.Net Mvc&Core Mvc",
            resim: "1.jpeg",
            anasayfa: true,
            onay: true
        },
        {
            blogid: 2,
            baslik: "Python ile Sıfırdan İleri Seviye Python Programlama",
            aciklama: "Sıfırdan İleri Seviye Python Dersleri.Veritabanı,Veri Analizi,Bot Yazımı,Web Geliştirme(Django)",
            resim: "2.jpeg",
            anasayfa: true,
            onay: false
        },
        {
            blogid: 3,
            baslik: "Sıfırdan İleri Seviye Modern Javascript Dersleri ES7+",
            aciklama: "Modern javascript dersleri ile (ES6 & ES7+) Nodejs, Angular, React ve VueJs için sağlam bir temel oluşturun.",
            resim: "3.jpeg",
            anasayfa: false,
            onay: true
        },
        {
            blogid: 3,
            baslik: "Sıfırdan İleri Seviye Modern Javascript Dersleri ES7+",
            aciklama: "Modern javascript dersleri ile (ES6 & ES7+) Nodejs, Angular, React ve VueJs için sağlam bir temel oluşturun.",
            resim: "3.jpeg",
            anasayfa: false,
            onay: true
        },
    ]
}


router.use("/blogs/:blogid", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/users", "blog-details.html"));


});



router.use("/blogs", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/users", "blogs.html"));


});



router.use("/", function (req, res, next) {
    res.sendFile(path.join(__dirname, "../views/users", "index2.html"));


});

module.exports= router;
