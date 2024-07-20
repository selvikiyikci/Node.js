const express = require("express");
const router = express.Router();

const db = require("../data/db");

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

router.use("/blogs/:blogid", async function(req, res) {
    const id = req.params.blogid;
    try {
        const [blog,] = await db.execute("select * from blog where blogid = ?", [id]);
        if(blog[0]){
            return res.render("users/blog-details", {
            title : blog[0].baslik,
            blog : blog[0]
            
        });
     }
     res.redirect("/");
    }
     catch(err){
        console.log(err);
     }
});

router.use("/blogs", async function(req, res) {
    try {
        const [blogs,] = await db.execute("select * from blog where onay = 1")
        const [categories, ]=await db.execute("select * from category");
        res.render("users/blogs", {
            title : "Tüm Kurslar",
            blogs : blogs,
            categories : categories

        })
    }
    catch(err) {
        console.log(err);

    }


});

router.use("/", async function(req, res) {
    try {
        const [blogs,] = await db.execute("select * from blog where onay = 1")
        const [categories, ]=await db.execute("select * from category");
        res.render("users/index", {
            title : "Popüler Kurslar",
            blogs : blogs,
            categories : categories

        })
    }
    catch(err) {
        console.log(err);

    }

    
});

module.exports = router;