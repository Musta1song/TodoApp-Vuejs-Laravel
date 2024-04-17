<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class vuetodo extends Model
{
    use HasFactory;

    protected $table = "vuetodos";

    protected $fillable = [
      'todo',
      'isDone',
      'time',
      'date'
    ];}
