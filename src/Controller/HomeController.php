<?php
namespace Code\Controller;

use Code\DB\Connection;
use Code\Entity\Category;
use Code\Entity\Post;
use Code\View\View;
use Code\Entity\Product;

class HomeController
{
	public function index()
	{
		$view = new View('site/index.phtml');

		return $view->render();
	}
}