<?php

namespace App\Http\Controllers;

use App\Models\TrackingData;
use Illuminate\Http\Request;

class TrackingController extends Controller
{


    public function store(Request $request) {
        // Validering og datamottak
        $data = $request->validate([
            'language' => 'required',
            'screenResolution' => 'required',
            'userAgent' => 'required',

        ]);

        // Opprette en ny TrackingData-oppføring
        //$trackingData = new TrackingData($data);
        //$trackingData->save();
        TrackingData::create($data);

        return response()->json(['success' => 'Data saved successfully']);
    }

}
