package com.github.stmishra.samples.api;


import com.github.stmishra.samples.db.DropwizardBootstrapDAO;
import com.yammer.metrics.annotation.Timed;

import javax.ws.rs.*;

@Path("/")
public class DropwizardBootstrapSampleResource {

    private DropwizardBootstrapDAO dao;

    public DropwizardBootstrapSampleResource(DropwizardBootstrapDAO dropwizardBootstrapDAO) {

        this.dao = dropwizardBootstrapDAO;
    }

    @POST
    @Timed
    @Path("/create")
    public void create()
    {
        dao.createSampleTable();
    }

}
