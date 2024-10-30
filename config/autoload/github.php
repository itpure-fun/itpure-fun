<?php

declare(strict_types=1);

return [
    'auth' => [
        //client id
        'client_id' => env('GITHUB_CLIENT_ID', ''),
        //client secret
        'client_secret' => env('GITHUB_CLIENT_SECRET', ''),
    ],
];
