const express = require("express");
const router = express.Router();
const fs = require("fs");

const imageUpload = require("../helpers/image-upload");

const Blog = require("../models/blog");
const Category = require("../models/category");

router.get("/blog/delete/:blogid", async function(req, res){
    const blogid = req.params.blogid;

    try {
        const blog = await Blog.findByPk(blogid);   
        if(blog){
        return res.render("admin/blog-delete", {
            title: "delete blog",
            blog: blog
        });
    }
    res.redirect("/admin/blogs");
    }
    catch(err) {
        console.log(err); 
    }
});

router.post("/blog/delete/:blogid", async function(req, res) {
    const blogid = req.body.blogid;
    try {
        const blog = await Blog.findByPk(blogid);   
        if(blog){
            await blog.destroy();
            return res.redirect("/admin/blogs?action=delete");

        }
        return res.redirect("/admin/blogs")

    }
    catch(err) {
        console.log(err);
    }
});

router.get("/category/delete/:categoryid", async function(req, res){
    const categoryid = req.params.categoryid;

    try {
        const categories = await Category.findByPk(categoryid);

       

        res.render("admin/category-delete", {
            title: "delete category",
            category: category
        });
    }
    catch(err) {
        console.log(err);
    }
});

router.post("/category/delete/:categoryid", async function(req, res) {
    const categoryid = req.body.categoryid;
    try {
        await Category.destroy({
            where : {
                categoryid : categoryid
            }
        })
        res.redirect("/admin/categories?action=delete");
    }
    catch(err) {
        console.log(err);
    }
});

router.get("/blog/create", async function(req, res) {
    try {
        const categories = await Category.findAll();

        res.render("admin/blog-create", {
            title: "add blog",
            categories: categories
        });
    }
    catch(err) {
        console.log(err);
    }
});

router.post("/blog/create", imageUpload.upload.single("resim"), async function(req, res) {
    const baslik = req.body.baslik;
    const altbaslik = req.body.altbaslik;
    const aciklama = req.body.aciklama;
    const resim = req.file.filename;
    const anasayfa = req.body.anasayfa == "on" ? 1:0;
    const onay = req.body.onay == "on"? 1:0;
    const kategori = req.body.kategori;

    try {
        await Blog.create({
            baslik: baslik,
            altbaslik: altbaslik,
            aciklama: aciklama,
            resim: resim,
            anasayfa: anasayfa,
            onay: onay,
            categoryid: kategori
        });
        res.redirect("/admin/blogs?action=create");
    }
    catch(err) {
        console.log(err);
    }
});

router.get("/category/create", async function(req, res) {
    try {
        res.render("admin/category-create", {
            title: "add category"
        });
    }
    catch(err) {
        console.log(err);
    }
});

router.post("/category/create", async function(req, res) {
    const name = req.body.name;
    try {
        await Category.create({ name: name });
        res.redirect("/admin/categories?action=create");
    }
    catch(err) {
        console.log(err);
    }
});

router.get("/blogs/:blogid", async function(req, res) {
    const blogid = req.params.blogid;

    try {
        const blog = await Blog.findByPk(blogid);
        const categories = await Category.findAll();

        if(blog) {
            return res.render("admin/blog-edit", {
                title: blog.dataValues.baslik,
                blog: blog.dataValues,
                categories: categories
            });
        }

        res.redirect("admin/blogs");
    }
    catch(err) {
        console.log(err);
    }
});

router.post("/blogs/:blogid", imageUpload.upload.single("resim"), async function(req, res) {
    const blogid = req.body.blogid;
    const baslik = req.body.baslik;
    const altbaslik = req.body.altbaslik;
    const aciklama = req.body.aciklama;
    let resim = req.body.resim;

    if(req.file) {
        resim = req.file.filename;

        fs.unlink("./public/images/" + req.body.resim, err => {
            console.log(err);
        });
    }

    const anasayfa = req.body.anasayfa == "on" ? 1 : 0;
    const onay = req.body.onay == "on" ? 1 : 0;
    const kategoriid = req.body.kategori;

    try {
        const blog = await Blog.findByPk(blogid);   
        if(blog){
            blog.baslik = baslik;
            blog.altbaslik = altbaslik;
            blog.aciklama = aciklama;
            blog.resim = resim;
            blog.anasayfa = anasayfa;
            blog.onay = onay;
            blog.categoryid = kategoriid;
            await blog.save();
            return res.redirect("/admin/blogs?action=edit&blogid=" + blogid);
        }
        // await db.execute("UPDATE blog SET baslik=?,altbaslik=?, aciklama=?, resim=?, anasayfa=?, onay=?, categoryid=? WHERE blogid=?", [baslik,altbaslik,aciklama, resim,anasayfa,onay,kategoriid, blogid]);
        res.redirect("/admin/blogs");
    }
    catch(err) {
        console.log(err);
    }
});

router.get("/categories/:categoryid", async function(req, res) {
    const categoryid = req.params.categoryid;

    try {
        const category = await Category.findByPk(categoryid);

        if(category) {
            return res.render("admin/category-edit", {
                title: category.dataValues.name,
                category: category.dataValues
            });
        }

        res.redirect("admin/categories");
    }
    catch(err) {
        console.log(err);
    }
});

router.post("/categories/:categoryid", async function(req, res) {
    const categoryid = req.body.categoryid;
    const name = req.body.name;

    try {
        const category = await Category.findByPk(categoryid);
        if(category){
            category.name = name;
            await category.save();

            await Category.update({name : name},
                    {
                        
           where : {
            categoryid : categoryid
           }         
        });
            return res.redirect("/admin/categories?action=edit&categoryid=" + categoryid);
        }
        
    
    }
    catch(err) {
        console.log(err);
    }
});

router.get("/blogs", async function(req, res) {
    try {
        // const [blogs,] = await db.execute("select blogid, baslik, altbaslik, resim from blog");
        const blogs = await Blog.findAll({ attributes: ["blogid","baslik","altbaslik","resim"] });
        console.log(blogs);
        res.render("admin/blog-list", {
            title: "blog list",
            blogs: blogs,
            action: req.query.action,
            blogid: req.query.blogid
        });
    }
    catch(err) {
        console.log(err);
    }
});

router.get("/categories", async function(req, res) {
    try {
        const categories = await Category.findAll();

        res.render("admin/category-list", {
            title: "blog list",
            categories: categories,
            action: req.query.action,
            categoryid: req.query.categoryid
        });
    }
    catch(err) {
        console.log(err);
    }
});

module.exports = router;