<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'content' => 'required',
        ]);

        $post = Post::create([
            'content' => $validated['content'],
        ]);

        return response()->json(['message' => 'Post saved successfully'], 200);
    }
}

