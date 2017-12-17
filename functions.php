<?php

function my_wp_scripts(){
   wp_enqueue_style('bootstrap', sprintf('%s/assets/css/bootstrap.min.css',get_template_directory_uri()));
  
   wp_enqueue_style('style', get_stylesheet_uri());
   
   wp_enqueue_script('bootstrap', sprintf('%s/assets/js/bootstrap.min.js',get_template_directory_uri()),
    ['jquery'],null, true);
}
	add_action('wp_enqueue_scripts', 'my_wp_scripts');


	
	// Habilita a  thumbnail para os posts do tema
	add_theme_support( 'post-thumbnails' );

	// Define o tamanho da imagem da thumbnail
	set_post_thumbnail_size( 120, 120);


