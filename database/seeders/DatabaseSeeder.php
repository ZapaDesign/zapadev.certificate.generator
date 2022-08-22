<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Certificate;
use App\Models\Student;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
//         User::factory(10)->create();
//
//         User::factory()->create([
//             'name' => 'Test User',
//             'email' => 'test@example.com',
//         ]);

        Certificate::factory(10)->create();

//        Student::factory(10)->create();
    }
}
