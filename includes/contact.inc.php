<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $name = $_POST['name'];
  $mailFrom = $_POST['name'];
  $name = $_POST['name'];
  $message = $_POST['name'];

  $mailTo = "tessalvarez@gmail.com";
  $headers = "From: ".$mailFrom;
  $txt = "You have received an e-,ail from".$nmae.".\n\n".$message;

  mail($mailTo, $message,  $txt, $headers);
  header("Location: contact.php?mailsend");
}
