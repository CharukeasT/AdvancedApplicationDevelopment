package com.examportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import com.examportal.model.Bookings;


public interface BookingRepo extends JpaRepository<Bookings,Integer> {
    @Query(value="select * from Bookings where userid=:s",nativeQuery=true)
	public List<Bookings> getBookingid(@Param("s") long userid);
}
