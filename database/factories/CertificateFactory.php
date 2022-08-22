<?php

namespace Database\Factories;

use App\Models\Student;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Certificate>
 */
class CertificateFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'student_id' => Student::inRandomOrder()->first()->id,
            'start'      => $this->faker->date(),
            'finish'     => $this->faker->date(),
            'time'       => $this->faker->numberBetween(140, 160),
            'location'   => $this->faker->word(),
            'date'       => $this->faker->date(),
        ];
    }
}
