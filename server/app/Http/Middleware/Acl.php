<?php
/**
 * Created by PhpStorm.
 * User: phuong
 * Date: 16/11/2017
 * Time: 13:31
 */

namespace App\Http\Middleware;
use Closure;

class Acl
{
    public function handle($request, Closure $next)
    {
        return $next($request);
    }
}