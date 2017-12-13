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
						printf('<li>Post: %s, title: %s, content: %s</li>', $post->ID, $post->post_title, $post->post_content);
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