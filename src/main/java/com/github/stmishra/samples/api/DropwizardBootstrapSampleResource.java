package com.github.stmishra.samples.api;


import com.github.stmishra.samples.db.DropwizardBootstrapDAO;
import com.yammer.metrics.annotation.Timed;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import java.util.List;
import java.util.Map;

@Path("/")
public class DropwizardBootstrapSampleResource {

    private DropwizardBootstrapDAO dao;

    public DropwizardBootstrapSampleResource(DropwizardBootstrapDAO dropwizardBootstrapDAO) {

        this.dao = dropwizardBootstrapDAO;
    }

    @GET
    @Timed
    @Path("/")
    @Produces("application/json")
    public List<Map<String, Object>> getAll()
    {
        return dao.getAll();
    }

}
