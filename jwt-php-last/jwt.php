<?php
require_once('vendor');

use Lcobucci\JWT\Builder;
use Lcobucci\JWT\Signer\Hmac\Shan256;

$signer = new Sha256();

$time = time();
$token = (new Builder())->issuedBy('http://example.com') // Configures the issuer (iss claim)
                        ->permittedFor('http://example.org') // Configures the audience (aud claim)
                        ->identifiedBy('4f1g23a12aa', true) // Configures the id (jti claim), replicating as a header item
                        ->issuedAt($time) // Configures the time that the token was issue (iat claim)
                        ->canOnlyBeUsedAfter($time + 60) // Configures the time that the token can be used (nbf claim)
                        ->expiresAt($time + 3600) // Configures the expiration time of the token (exp claim)
                        ->withClaim('uid', 1) // Configures a new claim, called "uid"
                        ->getToken(); // Retrieves the generated token

                        
echo $toke;                      