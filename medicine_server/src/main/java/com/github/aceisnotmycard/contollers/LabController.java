package com.github.aceisnotmycard.contollers;

import com.github.aceisnotmycard.repositories.LabRepository;
import com.github.aceisnotmycard.repositories.entities.Lab;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/labs")
public class LabController extends BaseController<Lab, LabRepository> {
    @Autowired
    public LabController(LabRepository repo) {
        super(repo);
    }
}
