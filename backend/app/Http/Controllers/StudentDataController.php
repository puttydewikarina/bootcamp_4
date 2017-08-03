<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\student;
use Illuminate\Support\Facades\DB;

class StudentDataController extends Controller
{
    function newUpdateStudent (Request $request) {

        DB::beginTransaction();

        try {
            $data = student::find($id);
            if ($data == null) {
                $this -> validate($request, [
                'name' => 'required',
                'email' => 'required|email'
                ]);
                $student = new student; 
                $student -> name = $request->input('name');
                $student -> email = $request->input('email');
                $student -> address = $request->input('address');
                $student -> course_id = $request->input('course_id');
                $student -> save();
            } 
            else {
                $student = new student;
                $student -> name = $request->input('name');
                $student -> email = $request->input('email');
                $student -> address = $request->input('address');
                $student -> course_id = $request->input('course_id');
                $student -> save();
            }

        $student = student::get();

        DB::commit();

        return response()->json($student, 201);
        }

        catch (\Exception $e) {

            DB::rollBack();

            return response()->json(["message"=>$e->getMessage()], 500);
        }
    }
}
