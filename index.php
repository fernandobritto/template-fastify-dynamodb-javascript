<?php get_header(); ?>
<?php get_header('custom'); ?>

<div class="container">
	<div class="row">
		<div class="col-md-6">
			<?php
				if(have_posts()):
					echo "<ul>";
					while (have_posts()): the_post(); 
						// var_dump($post->ID);
					  printf('<li><a href="%s">%s</a> %s</li>', 
					  	get_the_permalink(), get_the_title(), 
					  	get_the_content());
					endwhile;
					echo "</ul>";
				else:
					echo "<p>Ainda não temos Posts<p/>";

				endif;
			?>
		</div>

		<div class="col-md-6">
			<?php get_sidebar(); ?>
		</div>
		
	</div>
</div>

<?php get_footer(); ?>