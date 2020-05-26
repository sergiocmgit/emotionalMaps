package com.example.myapplication.geoemo

import android.graphics.Point
import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.ForeignKey
import androidx.room.PrimaryKey
import java.sql.Date


@Entity(tableName = "profile")
data class Profiledb(
    @PrimaryKey(autoGenerate = true)
    var profileId: Long = 0L,

    @ColumnInfo(name = "date_of_birth")
    var date: Date,

    @ColumnInfo(name = "gender")
    var gender: Char,

    @ColumnInfo(name = "frequency")
    var frequency: Int,

    @ColumnInfo(name = "type")
    var type: Char,

    @ColumnInfo(name = "total_number")
    var totalNumber: Int
)



@Entity(tableName = "reward", foreignKeys = [
    ForeignKey(
        entity = Profile::class,
        parentColumns = ["profileId"],
        childColumns = ["profileId"],
        onDelete = ForeignKey.CASCADE
    )])
data class Reward (
    @PrimaryKey(autoGenerate = true)
    var idReward: Long = 0L,

    @ColumnInfo(name = "profileId")
    var profileId: Long = 0L,

    @ColumnInfo(name = "date")
    var date: Date,

    @ColumnInfo(name = "totalNumber")
    var totalNumber: Int
)


@Entity(tableName = "rank", foreignKeys = [
    ForeignKey(
        entity = Profile::class,
        parentColumns = ["profileId"],
        childColumns = ["profileId"],
        onDelete = ForeignKey.CASCADE
    )])
data class Rankdb (
    @PrimaryKey(autoGenerate = true)
    var idRank: Long = 0L,

    @ColumnInfo(name = "profileId")
    var profileId: Long = 0L,

    @ColumnInfo(name = "monday")
    var monday: Boolean,

    @ColumnInfo(name = "tuesday")
    var tuesday: Boolean,

    @ColumnInfo(name = "wednesday")
    var wednesday: Boolean,

    @ColumnInfo(name = "thursday")
    var thursday: Boolean,

    @ColumnInfo(name = "friday")
    var friday: Boolean,

    @ColumnInfo(name = "saturday")
    var saturday: Boolean,

    @ColumnInfo(name = "sunday")
    var sunday: Boolean,

    @ColumnInfo(name = "sunday")
    var start: Date,

    @ColumnInfo(name = "sunday")
    var end: Date
)


@Entity(tableName = "notification")
data class Notification(
    @PrimaryKey(autoGenerate = true)
    var notificationId: Long = 0L,

    @ColumnInfo(name = "point1")
    var point1: Point,

    @ColumnInfo(name = "time1")
    var time1: Date,

    @ColumnInfo(name = "point2")
    var point2: Point,

    @ColumnInfo(name = "time2")
    var time2: Date,

    @ColumnInfo(name = "feeling")
    var feeling: Int
)