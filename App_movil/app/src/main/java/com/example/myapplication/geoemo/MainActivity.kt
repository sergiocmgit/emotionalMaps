package com.example.myapplication.geoemo

import android.annotation.SuppressLint
import android.app.DatePickerDialog
import android.app.TimePickerDialog
import android.os.Bundle
import android.view.View
import android.widget.Toast
import android.widget.ToggleButton
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import kotlinx.android.synthetic.main.fragment_profile.*
import kotlinx.android.synthetic.main.fragment_rank.*
import java.util.*


class MainActivity : AppCompatActivity(), OnFragmentActionsListener  {

    /** Variables para guardar fecha de nacimiento **/
    val c = Calendar.getInstance()
    var day = c.get(Calendar.DAY_OF_MONTH)
    var month = c.get(Calendar.MONTH)
    var year = c.get(Calendar.YEAR)
    lateinit var selectDate: String
    var okDate = false

    /** Variable para el sexo **/
    val sexOp: Array<String> = arrayOf("Hombre", "Mujer", "Otro")
    lateinit var sexSelect : String

    /** Variable para el tipo **/
    val typeOp: Array<String> = arrayOf("Residente", "Turista")
    lateinit var typeSelect : String

    /** Variable para los rangos**/
    /** Hora init **/
    var mHourinit = c.get(Calendar.HOUR_OF_DAY)
    var mMinuteinit = c.get(Calendar.MINUTE)
    var horaInit = false
    lateinit var selectHIn : String

    /** Hora fin **/
    var mHourend = c.get(Calendar.HOUR_OF_DAY)
    var mMinuteend = c.get(Calendar.MINUTE)
    var okHora = false
    lateinit var selectHEnd : String

    var tD: ToggleButton? = null
    var tL: ToggleButton? = null
    var tM: ToggleButton? = null
    var tMi: ToggleButton? = null
    var tJ: ToggleButton? = null
    var tV: ToggleButton? = null
    var tS: ToggleButton? = null
    var markedButtons = ""


    override fun onClickFragmentButton() {
        //Toast.makeText(this, "El botón ha sido pulsado", Toast.LENGTH_SHORT).show()
        saveRank()
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

    fun funSex(view: View){
        val listItems = sexOp
        val mBuilder = AlertDialog.Builder(this, android.R.style.Theme_Holo_Light_Dialog)
        mBuilder.setTitle("Sexo")
        mBuilder.setSingleChoiceItems(listItems, -1) { dialogInterface, i ->
            sexSelect = listItems[i]
            sexohint.text = sexSelect
            dialogInterface.dismiss()
        }
        // Set the neutral/cancel button click listener
        mBuilder.setNeutralButton("Cancelar") { dialog, which ->
            // Do something when click the neutral button
            dialog.cancel()
        }

        val mDialog = mBuilder.create()
        mDialog.show()
    }

    /** Función para elegir y guardar la fecha de nacimiento */
    @SuppressLint("SetTextI18n")
    fun funDate (view: View){

        val dpd = DatePickerDialog(this, android.R.style.Theme_Holo_Light_Dialog, DatePickerDialog.OnDateSetListener { datePicker,  yearOfY, monthOfY, dayOfY ->
            selectDate = "$dayOfY/" + (monthOfY + 1) + "/$yearOfY"
            fechanachint.text = selectDate
            year = yearOfY
            month = monthOfY
            day = dayOfY
            okDate = true

            // GUARDAR EN BBDD DIRECTAMENTE
        }, year, month, day)
        dpd.setTitle("Fecha de nacimiento")
        dpd.show()
    }

    /** Función para elegir y guardar el tipo */
    fun funType(view: View){
        val listItems = typeOp
        val mBuilder = AlertDialog.Builder(this, android.R.style.Theme_Holo_Light_Dialog)
        mBuilder.setTitle("Tipo")
        mBuilder.setSingleChoiceItems(listItems, -1) { dialogInterface, i ->
            typeSelect = listItems[i]
            tipohint.text = typeSelect
            dialogInterface.dismiss()
        }
        // Set the neutral/cancel button click listener
        mBuilder.setNeutralButton("Cancelar") { dialog, which ->
            // Do something when click the neutral button
            dialog.cancel()
        }

        val mDialog = mBuilder.create()
        mDialog.show()

    }
    /** Función para elegir y guardar los rangos */
    fun funRank(view: View){
        tD = findViewById(R.id.tD)
        tL = findViewById(R.id.tL)
        tM = findViewById(R.id.tM)
        tMi = findViewById(R.id.tMi)
        tJ =  findViewById(R.id.tJ)
        tV =  findViewById(R.id.tV)
        tS =  findViewById(R.id.tS)

        //cambiar
        val fragmentTransaction = supportFragmentManager.beginTransaction()
        fragmentTransaction.add(R.id.first, Rank())
        fragmentTransaction.commit()

    }

    /** Función para elegir y guardar la hora de inicio */
    @SuppressLint("SetTextI18n")
    fun funHinit (view: View){
        val dpd = TimePickerDialog(this, android.R.style.Theme_Holo_Light_Dialog, TimePickerDialog.OnTimeSetListener { timePicker, hour, minute ->
            selectHIn = "$hour:$minute"
            horainithint.text = selectHIn
            mHourinit = hour
            mMinuteinit = minute
            horaInit = true
            // GUARDAR EN BBDD DIRECTAMENTE
        }, mHourinit, mMinuteinit, true)
        dpd.setTitle("Hora de inicio")
        dpd.show()
    }

    /** Función para elegir y guardar la hora de fin */
    fun funHend (view: View) {
        if (horaInit) {
            val dpd = TimePickerDialog(
                this,
                android.R.style.Theme_Holo_Light_Dialog,
                TimePickerDialog.OnTimeSetListener { timePicker, hour, minute ->
                    selectHEnd = "$hour:$minute"
                    horafinhint.text = selectHEnd
                    mHourend = hour
                    mMinuteend = minute

                    if (mHourend < mHourinit) {
                        horafinhint.text = ""
                        okHora = false
                        val text = "Error: hora fin anterior a hora inicial"
                        val duration = Toast.LENGTH_SHORT

                        val toast = Toast.makeText(applicationContext, text, duration)
                        toast.show()

                    } else if (mHourend == mHourinit && mMinuteend <= mMinuteinit) {
                        horafinhint.text = ""
                        okHora = false
                        val text = "Error: hora fin anterior a hora inicial"
                        val duration = Toast.LENGTH_SHORT

                        val toast = Toast.makeText(applicationContext, text, duration)
                        toast.show()
                    }
                    else okHora = true
                    // GUARDAR EN BBDD DIRECTAMENTE
                },
                mHourend,
                mMinuteend,
                true
            )
            dpd.setTitle("Hora de fin")
            dpd.show()
        }
    }

    fun saveRank(){
       /* if (tD!!.isChecked) {
            markedButtons += "D,"
        }
        if (tL!!.isChecked) {
            markedButtons += "L,"
        }
        if (tM!!.isChecked) {
            markedButtons += "M,"
        }
        if (tMi!!.isChecked) {
            markedButtons += "Mi,"
        }
        if (tJ!!.isChecked) {
            markedButtons += "J,"
        }
        if (tV!!.isChecked) {
            markedButtons += "V,"
        }
        if (tS!!.isChecked) {
            markedButtons += "S"
        }
        rangohint.text = markedButtons*/

       /* val fragmentTransaction = supportFragmentManager.beginTransaction()
        fragmentTransaction.add(R.id.first, Profile())
        fragmentTransaction.commit()*/


    }
}
