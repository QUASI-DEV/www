<?php
require('handler.php');

$handler = new Handler("slock", __DIR__ . "/..");
if($handler->handle()) 
    echo "OK";
else
    echo "Wrong secret";

