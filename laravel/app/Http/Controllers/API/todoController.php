<?php

namespace App\Http\Controllers\API;


use Illuminate\Http\Request;
use App\Models\vuetodo;
use App\Http\Controllers\Controller;


class todoController extends Controller
{

    public function store(Request $request)
    {
        $todo = new vuetodo([
          'todo' => $request->get('todo'),
          'isDone' => $request->get('isDone'),
          'time' => $request->get('time'),
          'date' => $request->get('date'),

        ]);
        $todo->save();
        return response()->json('Successfully added');
    
    }
    public function update($id)
    {
    $data['isDone'] = true;
    vuetodo::find($id)->update($data);
      return response()->json([
          'message' => "Successfully updated",
          'success' => true
      ], 200);
    }
    public function getAll(){
      $data = vuetodo::get();
      return response()->json($data, 200);
    }
    public function get($id){
      $data = vuetodo::find($id);
      return response()->json($data, 200);
    }

    public function destroy($id)
  {
    $post = vuetodo::find($id);
    $post->delete();
    return redirect()->route('todo.index')
      ->with('success', 'todo deleted successfully');
  }
  
  }