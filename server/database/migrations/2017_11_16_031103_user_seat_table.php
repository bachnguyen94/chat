<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UserSeatTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_seat', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('seat_id');
            $table->integer('chedule_time_id');
            $table->integer('user_id');
            $table->integer('status'); //trạng thái của seat: "free/pending/close" theo thời gian
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
