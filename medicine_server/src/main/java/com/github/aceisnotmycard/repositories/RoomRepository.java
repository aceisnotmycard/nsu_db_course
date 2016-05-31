package com.github.aceisnotmycard.repositories;

import com.github.aceisnotmycard.repositories.entities.HospitalDepartment;
import com.github.aceisnotmycard.repositories.entities.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;


public interface RoomRepository extends JpaRepository<Room, Integer> {
    List<Room> findByDepartment(HospitalDepartment department);

    Optional<Room> findByName(String name);
}
