package com.github.aceisnotmycard.contollers;

import com.github.aceisnotmycard.repositories.RoomRepository;
import com.github.aceisnotmycard.repositories.entities.Room;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rooms")
public class RoomController extends BaseController<Room, RoomRepository> {
    @Autowired
    public RoomController(RoomRepository repo) {
        super(repo);
    }
}
