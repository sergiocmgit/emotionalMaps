package com.example.myapplication.geoemo


import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import java.util.*

/**
 * A simple [Fragment] subclass.
 */
class Profile : Fragment() {

    /** Variables para guardar fecha de nacimiento **/
    val c = Calendar.getInstance()
    var day = c.get(Calendar.DAY_OF_MONTH)
    var month = c.get(Calendar.MONTH)
    var year = c.get(Calendar.YEAR)
    var okDate = false

    /** Variable para el sexo **/
    val sexOp: Array<String> = arrayOf("Hombre", "Mujer", "Otro")
    lateinit var sexSelect: String

    /** Variable para el tipo **/
    val typeOp: Array<String> = arrayOf("Residente", "Turista")
    lateinit var typeSelect: String

    /** Variable para los rangos**/


    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {

        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_profile, container, false)
    }


}
