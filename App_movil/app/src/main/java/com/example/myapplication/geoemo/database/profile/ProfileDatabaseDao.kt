package com.example.myapplication.geoemo

import androidx.lifecycle.LiveData
import androidx.room.Dao
import androidx.room.Insert
import androidx.room.Query
import androidx.room.Update

@Dao
interface ProfileDatabaseDao {

    /** Insert en tablas */
    @Insert
    fun insertProfile(profile: Profiledb)

    @Insert
    fun insertReward(reward: Reward)

    @Insert
    fun insertRank(rank: Rankdb)

    @Insert
    fun insertNotification(notification: Notification)


    /** Update en tablas */
    @Update
    fun updateProfile(profile: Profiledb)

    @Update
    fun updateReward(reward: Reward)

    @Update
    fun updateRank(rank: Rankdb)

    @Update
    fun updateNotification(notification: Notification)


    /** Query en tablas */
    /** Get */
    @Query("SELECT * from profile")
    fun getProfile(): Profile?

    @Query("SELECT * from rank WHERE idRank = :key")
    fun getRank(key: Long): Rank?

    /** Clear */
    @Query("DELETE FROM profile")
    fun clearProfile()

    @Query("DELETE FROM reward")
    fun clearReward()

    @Query("DELETE FROM rank")
    fun clearRank()

    @Query("DELETE FROM notification")
    fun clearNotification()

    /** getAll - rank y notif */
    @Query("SELECT * FROM rank ORDER BY idRank DESC")
    fun getAllRank(): LiveData<List<Rank>>

    @Query("SELECT * FROM notification")
    fun getAllNotification(): LiveData<List<Notification>>
}