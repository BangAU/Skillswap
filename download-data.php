<?php
$document_entire_url = $_GET['url'];
$file = "documents/".basename($document_entire_url)."";
header("Content-Disposition: attachment; filename=".basename($document_entire_url)."");
header("Content-Length: ".filesize($file));
header("Content-Type: application/pdf");
readfile($file);
?>