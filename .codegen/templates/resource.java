package com.example.demo.web.rest;

import com.example.demo.model.Model;
import com.example.demo.repository.ModelRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api")
@Transactional
public class ModelResource {

    private final Logger log = LoggerFactory.getLogger(ModelResource.class);

    private final ModelRepository ModelRepository;

    public ModelResource(ModelRepository ModelRepository) {
        this.ModelRepository = ModelRepository;
    }

    @PostMapping("/models")
    public ResponseEntity<Model> createModel(@RequestBody Model model) throws Exception {
        log.debug("REST request to save model : {}", model);
        if (model.getId() != null) {
            throw new RuntimeException("A new model cannot already have an ID");
        }
        Model result = ModelRepository.save(model);
        return ResponseEntity
                .created(new URI("/api/models/" + result.getId()))
                .body(result);
    }

    @PutMapping("/models")
    public ResponseEntity<Model> updateModel(@RequestBody Model model) {
        log.debug("REST request to update model : {}", model);
        if (model.getId() == null) {
            throw new RuntimeException("Invalid id");
        }
        return ModelRepository.findById(model.getId())
                .map(it -> ResponseEntity.ok().body(it))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/models")
    public List<Model> getAllModels() {
        log.debug("REST request to get all models");
        return ModelRepository.findAll();
    }

    @GetMapping("/models/{id}")
    public ResponseEntity<Model> getModel(@PathVariable Long id) {
        log.debug("REST request to get model : {}", id);
        return ModelRepository.findById(id)
                .map(it -> ResponseEntity.ok().body(it))
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/models/{id}")
    public ResponseEntity<Void> deleteModel(@PathVariable Long id) {
        log.debug("REST request to delete model : {}", id);
        ModelRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
    
}
