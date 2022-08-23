<?php

namespace App\Http\Controllers;

use App\Models\Certificate;
use Illuminate\Http\Request;

class CertificateController extends Controller
{
    public function index() {
        return view('certificates', [
            'certificates' => Certificate::all(),
        ]);
    }

    public function show($id) {
        return 'Certificate # ' . $id;
    }

    public function delete($id) {
        return 'Delete';
    }
}
