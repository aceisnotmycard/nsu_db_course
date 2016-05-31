package com.github.aceisnotmycard.contollers;

import com.github.aceisnotmycard.repositories.HospitalDepartmentRepository;
import com.github.aceisnotmycard.repositories.RoomRepository;
import com.github.aceisnotmycard.repositories.entities.HospitalDepartment;
import com.github.aceisnotmycard.repositories.entities.Room;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/departments")
public class HospitalDepartmentController extends BaseController<HospitalDepartment, HospitalDepartmentRepository> {

    private RoomRepository roomRepo;

    @Autowired
    public HospitalDepartmentController(HospitalDepartmentRepository repo, RoomRepository roomRepo) {
        super(repo);
        this.roomRepo = roomRepo;
    }

    @RequestMapping(value = "{id}/rooms", method = RequestMethod.GET)
    public List<Room> findDepartmentRooms(@PathVariable Integer id) {
        return roomRepo.findByDepartment(repo.findOne(id));
    }
}
